import {
  TestButton,
  Size,
  Hierarchy,
  State,
  IconState,
} from "components/TestButton";

export function VerifyUIKit() {
  return (
    <TestButton
      size={Size.sm}
      hierarchy={Hierarchy.Empty}
      state={State.default}
      icon={IconState.None}
    >
      Hello
    </TestButton>
  );
}
