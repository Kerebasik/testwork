import './Input.style.scss';

type InputProps = {
  placeholder: string;
  value?: string;
  error?: boolean;
  errorMessage?: string;
  onChange?: () => void;
};

const Input = ({
  placeholder,
  value = '',
  errorMessage = undefined,
  error = false,
  onChange = () => {},
}: InputProps) => {
  return (
    <div className={'input-field'}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${error && 'error'}`}
      />
      {!!errorMessage && (
        <p className={'input-field__error-alert'}>{errorMessage}</p>
      )}
    </div>
  );
};

export { Input };
