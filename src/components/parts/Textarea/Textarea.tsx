import './Textarea.style.scss';

type TextareaProps = {
  placeholder: string;
  error?: boolean;
  onChange?: () => void;
  errorMessage?: string;
  value?: string;
};

const Textarea = ({
  placeholder,
  value = '',
  errorMessage = undefined,
  onChange = () => {},
  error = false,
}: TextareaProps) => {
  return (
    <div className={'textarea'}>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${error && 'error'}`}
      />
      {!!errorMessage && (
        <p className={'textarea__error-alert'}>{errorMessage}</p>
      )}
    </div>
  );
};

export { Textarea };
