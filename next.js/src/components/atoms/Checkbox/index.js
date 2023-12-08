import Error from '../Error';
import styles from './styles.module.scss';

const Checkbox = ({ register, label, errors, ...props }) => {
  return (
    <label className={styles.label} aria-invalid={Boolean(errors[register.name])}>
      <div className={styles.icon}>
        <input
          {...register}
          name={register.name}
          type="checkbox"
          {...props}
        />
        <Check />
      </div>
      <p className="label">{label}</p>
      <Error error={errors[register.name]} />
    </label>
  );
};

export default Checkbox;

const Check = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 16 16'
  >
    <path
      strokeLinecap='round'
      d='M2.666 8.666L5.999 12l7.334-7.333'
    ></path>
  </svg>
)