import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Button from '@/components/atoms/Button';
import Img from '@/components/atoms/Img';

const speedMapping = [
  .35, .15, .25, .5, .5, .15, .25, .5, .1, .25
]

const sizes = (i) => (
  i % 10 === 0 || i % 10 === 2 || i % 10 === 6 || i % 10 === 8
  ? '(max-width: 768px) 214px, 381px'
    : i % 10 === 1 || i % 10 === 5
  ? '(max-width: 768px) 271px, 482px'
    : '(max-width: 768px) 156px, 277px'
)

const Hero = ({
  heading,
  paragraph,
  cta,
  paintings
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Button data={cta} />
      </header>
      <div className={styles.paintings}>
        {paintings.map(({ img, year, type, title, availability }, i) => (
          <div
            className={styles.item}
            key={i}
            data-scroll
            data-scroll-speed={speedMapping[i % speedMapping.length]}
          >
            <Img
              data={img}
              priority={[0,1].includes(i)}
              sizes={sizes(i)}
            />
            <p className={styles.availability} data-available={availability}>{availability ? 'Dostępny' : 'Niedostępny'}</p>
            <div className={styles.info}>
              <p>{year}</p>
              <p>{type}</p>
            </div>
            <p className={styles.title}>{title}</p>
          </div>
        ))}
      </div>
      <Decoration className={styles.decoration} />
    </section>
  );
};

export default Hero;

const Decoration = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='3.18 9.02 279.66 257.14'
    {...props}
  >
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M168.584 96.676c1.335 2.156 27.417 44.473 28.737 83.519m-1.146-70.336c6.906 13.57 19.71 48.602 15.683 80.174m-19.87-13.062c-13.46 6.08-58.221 15.703-129.584 5.555m140.817 2.047c-14.806 7.642-60.847 20.323-126.56 9.915m143.893 1.913c-24.969 7.379-86.505 19.201-132.895 7.458m131.049-82.025c4.832 11.556 12.697 43.104 5.504 76.85'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M226.394 199.872c-18.764 10.358-70.563 27.39-127.642 12.651M231.489 132.7c1.677 15.459 4.795 51.706 3.849 73.032m9.773-58.995c2.601 8.922 5.909 34.829-1.664 67.085'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M234.597 207.254c-20.602 8.376-74.067 23.4-123.11 16.489m134.202-7.825c-24.611 11.025-83.677 29.94-123.05 17.396'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M252.11 221.805c-25.966 11.746-84.961 32.578-113.213 21.935m117.693-80.37c1.141 14.068 1.741 45.4-4.987 58.188m7.188 6.888c-13.552 8.588-49.987 26.113-87.316 27.516m96.021-72.975c-.334 9.794-2.883 31.904-10.407 41.995m11.18 12.095c-8.691 8.569-36.897 25.106-80.201 22.697m85.314-45.057c-1.157 5.126-4.1 16.051-6.615 18.742m-139.86-97.838c-12.804 2.927-51.564 6.72-104.175-1.526m113.733 8.187c-10.96 3.951-48.14 8.865-109.188-3.087'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M32.864 147.311c27.378 5.717 88.398 13.874 113.452.771m-31.014-64.923c16.114 14.246 49.09 49.603 52.085 77.065M41 157.924c27.567 6.101 90.233 14.692 120.36.244m-17.839-69.301c11.152 15.93 34.659 54.499 39.463 81.336m-132.561.843c32.678 4.197 103.987 9.49 127.796-2.913m-65.975-40.028c-21.521 2.615-70.261 6.302-93.055.123m60.425-46.005c17.108 11.258 52.824 39.048 58.82 60.139M95.552 81.45c17.093 14.555 52.921 49.209 59.494 71.385m-93.22-68.102c12.868 4.759 42.225 20.658 56.705 46.182M90.88 116.824c-16.077 3.635-53.327 9.979-73.713 6.278m25.697-32.416c10.107 2.954 32.883 11.542 43.13 22.253M30.396 95.157c7.571 1.72 23.643 6.291 27.365 10.813 3.721 4.523-27.283 11.273-43.251 14.082'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M20.284 98.14c4.634.792 14.363 2.977 16.205 5.38-6.078 4.236-19.754 12.219-25.83 10.265'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M273.189 201.195c-2.008 8.661 1.983 34.934 4.23 46.988-2.558-1.345-10.575.583-14.263 1.715-13.226 7.606-29.021 13.982-38.593 15.597-7.657 1.292-37.403-5.661-51.319-9.299-18.603-3.034-38.436-14.196-46.026-19.398l-68.532-57.462c-8.185-6.696-29.302-36.564-38.837-50.66L3.678 102.605c6.375-.31 26.77-7.381 36.17-10.878C61.792 82.533 75.84 81.725 80.12 82.47c27.707-2.674 63.796 5.67 78.378 10.175 11.426 3.957 37.625 17.148 49.296 23.248 31.116 12.389 67.904 74.476 65.394 85.302z'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M4.292 103.406c17.99-.863 60.278.333 85.513 12.016 9.469 4.611 37.491 19.71 73.831 43.226 31.926 18.975 99.359 63.587 113.69 90.243M262.893 47.814c.012 1.209.206 24.916-8.895 41.173m16.898-28.982c-.533 7.242-3.958 24.697-13.397 36.586m-4.882-10.236c-6.993-.842-27.634-7.967-54.247-29.728m56.953 35.603c-7.928-.537-29.846-6.73-54.089-27.202m58.242 36.309c-12.011-3.155-40.039-13.524-56.068-29.77m73.725-1.112c-.881 5.908-5.461 20.723-16.728 32.716'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M261.002 104.195c-10.214-.407-35.555-6.246-55.206-26.354m73.87.203c-3.133 6.722-10.81 22.282-16.462 30.75m18.554-21.659c-1.141 4.282-6.188 15.67-17.242 26.962'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M262.526 109.232c-10.474-1.669-35.999-8.739-54.305-23.668m56.692 29.942c-12.764-1.578-41.535-8.443-54.504-23.283'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M266.079 119.494c-13.495-1.619-42.711-7.685-51.611-19.003m67.867-3.735c-3.007 6.022-10.499 18.955-16.401 22.511m1.232 4.586c-7.65.158-26.844-1.687-42.422-10.331m57.198-6.069c-2.554 3.914-9.054 12.306-14.615 14.566m1.575 7.696c-5.662 1.351-21.254 1.134-38.329-10.541m5.698-65.76c-5.947-1.967-22.7-9.989-42.131-26.343m44.387 31.421c-5.448-1.094-21.832-8.269-43.791-28.218'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M195.012 34.965c9.76 9.092 32.644 27.486 46.102 28.326m3.375-34.149c3.057 9.792 7.783 32.361 2.225 44.306m-51.003-32.144c9.742 9.296 33.191 28.274 49.051 29.817m9.832-32.682c.617 9.253.686 30.795-3.98 42.932m-54.298-32.386c12.298 9.78 40.087 29.547 52.865 30.365m-17.037-32.623c-9.428-4.246-30.226-14.776-38.001-22.925m36.015-3.852c4.201 8.817 11.913 28.974 9.152 39.06m-2.458-35.441c3.381 10.159 9.444 33.145 6.651 43.817M222.28 16.581c4.076 5.12 12.129 18.855 11.735 32.845m-7.803-12.577c-7.458-2.486-24.224-9.094-31.628-15.638m18.489-6.883c3.395 3.702 10.568 12.83 12.104 19.73m-18.295-20.983c2.664 2.57 8.094 8.404 8.496 11.168.402 2.765-13.916-2.136-21.125-4.933'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M202.019 11.795c1.695 1.467 5.126 4.761 5.284 6.196-3.526.228-11.077.109-13.074-2.189'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M279.769 116.288c-2.958 3.038-7.816 14.744-9.876 20.218-.711-1.181-4.458-2.374-6.243-2.822-7.274-.162-15.294-1.46-19.598-3.165-3.443-1.363-13.864-11.545-18.644-16.465-6.842-5.831-12.178-15.282-13.991-19.279l-13.776-40.367c-1.687-4.754-2.929-22.154-3.339-30.26l-.161-14.631c2.678 1.447 12.745 3.597 17.444 4.491 11.225 1.667 17.156 4.806 18.719 6.167 11.965 5.75 24.631 18.065 29.468 23.503 3.686 4.436 11.119 16.287 14.375 21.658 9.638 12.738 9.319 47.155 5.622 50.952z'
    ></path>
    <path
      stroke='#E7CFA2'
      strokeLinecap='round'
      strokeOpacity='0.5'
      d='M194.194 9.995c7.553 4.09 24.513 15.019 31.925 26.017 2.726 4.219 10.432 17.299 19.454 35.867 8.342 15.625 24.842 50.478 24.108 64.892'
    ></path>
  </svg>
)