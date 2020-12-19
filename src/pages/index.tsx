import React, { useMemo, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css';

const Home = () => {
  const [spent, setSpent] = useState(0);
  const options = useMemo(() => ['식비', '교통비', '생활비', '쇼핑'], []);

  return (
    <div className="home">
      Home
      <div className="write-area">
        <div className="write-box">
          <Form.Control as="select" style={{ width: 100 }}>
            {options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            type="number"
            value={spent}
            onChange={(e) => setSpent(e.target.value as any)}
            style={{ marginLeft: 10 }}
            min={0}
          />
          <Button variant="warning">Primary</Button>
        </div>
      </div>
      <div className="today">오늘지출</div>
    </div>
  );
};

export default Home;
