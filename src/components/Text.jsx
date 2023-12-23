export default function Text({ s, p, c, data, text, className = "", dark }) {
  // s = span, p = paragraph, c = code
  if (s && dark)
    return (
      <span className={`${className} txt txt-lblue`} data-text={data}>
        {text}
      </span>
    );
  else if (s && !dark)
    return (
      <span className={`${className} txt txt-envmap`} data-text={data}>
        {text}
      </span>
    );
  else if (p && dark)
    return (
      <p className={`${className} txt txt-lblue`} data-text={data}>
        {text}
      </p>
    );
  else if (p && !dark) {
    return (
      <p className={`${className} txt txt-envmap`} data-text={data}>
        {text}
      </p>
    );
  } else if (c && dark) {
    return (
      <code className={`${className} txt-lenvmap`} data-text={data}>
        {text}
      </code>
    );
  } else if (c && !dark) {
    return (
      <code className={`${className} txt-lenvmap`} data-text={data}>
        {text}
      </code>
    );
  } else return <mark className="txt-mark"> Text compoment </mark>;
}
