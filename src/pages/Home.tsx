import Calendar from "@components/calendar";
import Time from "@components/time";
import { useState } from "react";
import { Container } from "styles/home/style";
import logo from "@assets/tuk.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date[]>([]);
  const [time, setTime] = useState({
    start: 0,
    end: 1,
  });

  const navigate = useNavigate();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onDateChange = (date: Date[] | null) => {
    setDate(date!);
  };

  const onTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    const isStart = id === "start";

    if (isStart && time.end <= +value) {
      return setTime({
        start: +value,
        end: +value + 1,
      });
    }
    if (!isStart && time.start >= +value) {
      return setTime({
        start: +value - 1,
        end: +value,
      });
    }

    setTime((prev) => ({
      ...prev,
      [e.target.id]: +e.target.value,
    }));
  };

  const handleCreateEvent = () => {
    if (!name.trim()) {
      return alert("계획 이름은 최소 1글자 이상이어야 합니다.");
    }
    if (date.length === 0) {
      return alert("계획은 최소 하루 이상이어야 합니다.");
    }
    navigate("/event");
  };

  return (
    <Container>
      <img src={logo} alt="학교 로고" />
      <label htmlFor="plan-name">
        TUK when2meet
        <input
          id="plan-name"
          value={name}
          onChange={onNameChange}
          placeholder="계획 이름을 입력하세요."
        />
      </label>
      <Calendar date={date} onChange={onDateChange} />
      <Time {...time} onChange={onTimeChange} />
      <button onClick={handleCreateEvent}>일정 생성하기</button>
    </Container>
  );
};

export default Home;
