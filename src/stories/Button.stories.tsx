import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { useState } from 'react';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button primary={isPrimary} onClick={handleOnChange} label={value}/>;
};

export const Primary: Story = {
  render: () => <ButtonWithHooks />,
};