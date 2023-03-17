import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const Timer = () => {
    const [countdown, setCountdown] = useState(90);

    useEffect(() => {
        const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
        return () => clearInterval(timer)
    }, [countdown]);

    const stopTimer = () => {
        setCountdown(0);
    }

    // const timer = () => {
    //     setInterval(countDownTimer(), 1000)
    // }

  return (
    <>
        <h4>This will automatically count down from 90 seconds. More functionalities coming soon.</h4>
        <Card className="bg-dark text-light">
            <Card.Body>
                <Card.Text>{countdown}</Card.Text>
                <Button onClick={stopTimer}>Stop Timer</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default Timer