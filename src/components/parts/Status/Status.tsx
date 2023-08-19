import './Status.style.scss';

type StatusProps = {
  text: string;
  process: 'success' | 'inWork' | undefined;
};

const Status = ({ text = '', process = 'success' }: StatusProps) => {
  return (
    <div>
      <p
        className={`status ${process === 'success' && 'success'} ${
          process === 'inWork' && 'inWork'
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export { Status };
