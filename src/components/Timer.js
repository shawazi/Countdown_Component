import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const Timer = ({ initial }) => {
    const [countdown, setCountdown] = useState(initial || 90);
    const [counting, setCounting] = useState(true)

    useEffect(() => {
        let id;
        if (counting) {
            id = setInterval(handleTimer, 1000);
        }
        return () => clearInterval(id)
    }, [countdown, counting]);

    const handleTimer = () => {
        if (countdown > 0) setCountdown(countdown -1);
        else setCounting(false);
    }

    const handlePause = () => {
        setCounting((prev) => !prev);
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
                <Button onClick={handlePause}>{counting ? "Stop" : "Resume"}</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default Timer