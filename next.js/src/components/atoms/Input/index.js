import styles from './styles.module.scss';
import Error from '../Error';
import Textarea from './Textarea';

const Input = ({
  register,
  label,
  errors,
  textarea=false,
  ...props
}) => {
  return (
    <label
      className={styles.wrapper}
      aria-invalid={Boolean(errors[register.name])}
    >
      <p dangerouslySetInnerHTML={{ __html: label}} />
      {textarea ? (
        <Textarea
          rows={2}
          {...register}
          name={register.name}
          {...props}
        />
      ) : (
        <input
          {...register}
          name={register.name}
          {...props}
        />
      )}
      <Error error={errors[register.name]} />
    </label>
  );
};

export default Input;