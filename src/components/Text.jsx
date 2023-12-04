export default function Text({ s, p, c, data, text, className = "" }) {
  // s = span, p = paragraph, c = code
  if (s)
    return (
      <span className={`${className} txt`} data-text={data}>
        {text}
      </span>
    );
  else if (p)
    return (
      <p className={`${className} txt`} data-text={data}>
        {text}
      </p>
    );
  else if (c)
    return (
      <code className={`${className}`} data-text={data}>
        {text}
      </code>
    );
  else return <mark className="txt-mark"> Text compoment </mark>;
}
