




export default function formatText(text: string) {
  return text.split('\n').map((line, index) => (
    <p key={index} className="mb-4">{line}</p>
  ));
}