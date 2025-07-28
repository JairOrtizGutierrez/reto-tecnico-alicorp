import { TypeAnimation } from "react-type-animation";
import { memo } from "react";

interface ChatAnswerProps {
  message: string;
  isResumed: boolean;
}

export const ChatAnswer: React.FC<ChatAnswerProps> = memo(
  ({ message, isResumed }) => {
    return (
      <div className="mb-5">
        {!isResumed ? (
          <TypeAnimation
            sequence={[message]}
            wrapper="span"
            cursor={false}
            speed={80}
          />
        ) : (
          <span>{message}</span>
        )}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.message === nextProps.message;
  },
);
