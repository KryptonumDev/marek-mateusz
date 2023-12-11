'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from '@/components/atoms/Checkbox';
import styles from './styles.module.scss';
import Input from '@/components/atoms/Input';
import { regex } from '@/global/constants';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import Loader from '@/components/atoms/Loader';
import { phoneValidation } from '@/utils/functions';
import Radio from '@/components/atoms/Radio';
import Img from '@/components/atoms/Img';
import Error from '@/components/atoms/Error';

const Form = ({
  socials,
  phone,
  works
}) => {
  const [status, setStatus] = useState({ sending: false });
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'all' });

  const onSubmit = async (data) => {
    setStatus({ sending: true });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok && responseData.success) {
        setStatus((prevStatus) => ({ ...prevStatus, success: true }));
        reset();
      } else {
        setStatus((prevStatus) => ({ ...prevStatus, success: false }));
      }
    } catch {
      setStatus((prevStatus) => ({ ...prevStatus, success: false }));
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Imię i nazwisko"
        type="text"
        register={register('name', {
          required: { value: true, message: `Imię i nazwisko jest wymagane` },
          minLength: { value: 3, message: `Minimum 3 znaki` }
        })}
        errors={errors}
      />
      <Input
        label="E-mail"
        type="email"
        register={register('email', {
          required: { value: true, message: `E-mail jest wymagany` },
          pattern: { value: regex.email, message: `Niepoprawny adres e-mail` }
        })}
        errors={errors}
      />
      <Input
        label="Telefon <em>(opcjonalnie)</em>"
        type="tel"
        placeholder="_ _ _    _ _ _    _ _ _"
        register={register('phone', {
          pattern: { value: regex.phone, message: `Niepoprawny numer telefonu` },
        })}
        onKeyDown={(e) => phoneValidation(e)}
        errors={errors}
      />
      <div className={styles.topic}>
        <p>Wskaż temat wiadomości</p>
        <div>
          {works?.map(({ img, title }, i) => (
            <label
              key={i}
              className={styles.painting}
              aria-invalid={Boolean(errors['subject'])}
              aria-label={title}
              title={title}
            >
              <input
                type="radio"
                name="subject"
                value={title}
                {...register('subject', {
                  required: { value: true, message: `Temat jest wymagany` }
                })}
              />
              <Img
                data={img}
                sizes='100px'
              />
            </label>
          ))}
          <Radio
            label="Mural"
            value="Mural"
            register={register('subject', {
              required: { value: true, message: `Temat jest wymagany` }
            })}
            errors={errors}
          />
          <Radio
            label="Coś innego"
            value="Coś innego"
            register={register('subject', {
              required: { value: true, message: `Temat jest wymagany` }
            })}
            errors={errors}
          />
        </div>
        <Error error={errors['subject']} />
      </div>
      <Input
        label="Treść wiadomości <em>(opcjonalnie)</em>"
        textarea={true}
        register={register('message')}
        errors={errors}
      />
      <Checkbox
        label={<>
          Wyrażam zgodę na{' '}
          <Link
            className='link'
            href="/polityka-prywatnosci"
            target="_blank"
            rel="noreferrer"
          >politykę prywatności</Link>
        </>}
        register={register('legal', {
          required: { value: true, message: `Zgoda jest wymagana` }
        })}
        errors={errors}
      />
      <Button
        type="submit"
        disabled={status.sending}
      >
        {status.sending && (
          <Loader />
        )}
        Wyślij wiadomość
      </Button>
      {status.success !== undefined && (
        <div className={styles.state} aria-invalid={!status.success}>
          {status.success ? <Status.Success /> : <Status.Error />}
          <h3 className='h2'>{status.success ? "DZIĘKUJEMY!" : "WYSTĄPIŁ PROBLEM"}</h3>
          <p className={styles.paragraph}>{
            status.success
            ? "Właśnie dotarła do nas Twoja wiadomość. Postaramy się jak najszybciej na nią odpowiedzieć. W między czasie zapraszamy Cię do śledzenia nas na social media."
            : "Napotkaliśmy drobne problemy podczas przesyłania formularza. Spróbuj wysłać go ponownie, a w razie problemów skontaktuj się z nami poprzez numer telefonu."
          }</p>
          {status.success ? (
            socials.length > 0 && (
              <ul className={styles.socials}>
                {socials.map(({ name, url, icon }, i) => (
                  <li key={i}>
                    <a
                      href={url}
                      target='_blank'
                      rel="noopener"
                      aria-label={name}
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            )
          ) : (
            <>
              <Button
                type="button"
                onClick={() => setStatus({ sending: false, success: undefined })}
              >Spróbuj ponownie</Button>
              {phone}
            </>
          )}
        </div>
      )}
    </form>
  );
};

export default Form;

const Status = {
  "Success": () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      fill='none'
      viewBox='0 0 48 48'
    >
      <rect
        width='47'
        height='47'
        x='0.5'
        y='0.5'
        stroke='#E7CFA2'
        rx='23.5'
      ></rect>
      <rect
        width='38'
        height='38'
        x='5'
        y='5'
        stroke='#C9B083'
        strokeWidth='2'
        rx='19'
      ></rect>
      <path
        stroke='#71A584'
        strokeLinecap='round'
        d='M15.5 24.531l5.313 5.313L32.5 18.156'
      ></path>
    </svg>
  ),
  "Error": () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      fill='none'
      viewBox='0 0 48 48'
    >
      <rect
        width='47'
        height='47'
        x='0.5'
        y='0.5'
        stroke='#E7CFA2'
        rx='23.5'
      ></rect>
      <rect
        width='38'
        height='38'
        x='5'
        y='5'
        stroke='#C9B083'
        strokeWidth='2'
        rx='19'
      ></rect>
      <path
        stroke='#E8A1A1'
        strokeLinecap='round'
        d='M29.657 29.657L18.343 18.343m11.314 0L18.343 29.657'
      ></path>
    </svg>
  )
}