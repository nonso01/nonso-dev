export default function Text({ s, p, c, data, text }) {
  // s = span, p = paragraph, c = code
  if (s && text)
    return (
      <span className="txt txt-span" data-text={data}>
        {text}
      </span>
    );
  else if (p && text)
    return (
      <p className="txt txt-paragraph" data-text={data}>
        {text}
      </p>
    );
  else if (c && text)
    return (
      <code className="txt-code" data-text={data}>
        {text}
      </code>
    );
  else return <mark className="txt-mark"> Text compoment </mark>;
}
