import type { IconSource, BaseButton } from 'types/type';
import { ActionListItemDescriptor } from '@/components/ActionList/utils';
import { UnstyledButtonProps } from '../UnstyledButton/utils';

export interface ConnectedDisclosure {
  /** Visually hidden label for the connected disclosure button.
   * @default 'Related actions'
   */
  accessibilityLabel?: string;
  /** Whether or not the disclosure is disabled */
  disabled?: boolean;
  /** List of actions */
  actions: ActionListItemDescriptor[];
}

export interface ButtonProps extends BaseButton {
  children?: string | string[];
  primary?: boolean;
  destructive?: boolean;
  size?: 'slim' | 'medium' | 'large';
  textAlign?: 'left' | 'right' | 'center';
  outline?: boolean;
  fullWidth?: boolean;
  disclosure?: 'down' | 'up' | 'select' | boolean;
  plain?: boolean;
  monochrome?: boolean;
  removeUnderline?: boolean;
  icon?: IconSource;
  connectedDisclosure?: ConnectedDisclosure;
}

export interface CommonButtonProps
  extends Pick<
  ButtonProps,
  | 'id'
  | 'accessibilityLabel'
  | 'ariaDescribedBy'
  | 'role'
  | 'onClick'
  | 'onFocus'
  | 'onBlur'
  | 'onMouseEnter'
  | 'onTouchStart'
  > {
  className: UnstyledButtonProps['className'];
  onMouseUp: (event: MouseEvent)=> void;
}

export type LinkButtonProps = Pick<ButtonProps, 'url' | 'external' | 'download'>;

export type ActionButtonProps = Pick<
  ButtonProps,
  | 'submit'
  | 'disabled'
  | 'loading'
  | 'ariaControls'
  | 'ariaExpanded'
  | 'pressed'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onKeyPress'
  >;
