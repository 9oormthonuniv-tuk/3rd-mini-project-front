import { Section } from "./style";

interface TimeProps {
  start: number;
  end: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Time = ({ start, end, onChange }: TimeProps) => {
  return (
    <Section>
      <label>
        <span>시작 시간</span>
        <select id="start" value={start} onChange={onChange}>
          {Array.from({ length: 24 }, (_, i) => (
            <option key={`start-time-${i}`} value={i}>
              {`${i < 12 ? "오전" : "오후"} ${i % 12 || 12}시`}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>종료 시간</span>
        <select id="end" value={end} onChange={onChange}>
          {Array.from({ length: 23 }, (_, i) => (
            <option key={`end-time-${i + 1}`} value={i + 1}>
              {`${i + 1 < 12 ? "오전" : "오후"} ${(i + 1) % 12 || 12}시`}
            </option>
          ))}
        </select>
      </label>
    </Section>
  );
};

export default Time;
