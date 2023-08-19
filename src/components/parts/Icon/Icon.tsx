import './Icon.style.scss';

type IconProps = {
  img: string;
};

const Icon = ({ img }: IconProps) => {
  return (
    <>
      <img className={'icon'} src={img} alt={'icon'} />
    </>
  );
};

export { Icon };
