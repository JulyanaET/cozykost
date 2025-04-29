import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  primary?: boolean;
  buttonStyle?: object;
  textStyle?: object;
}

const Button = ({
  title,
  primary = true,
  buttonStyle,
  textStyle,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary ? styles.primaryButton : styles.secondaryButton,
        buttonStyle,
      ]}
      {...props}>
      <Text
        style={[
          styles.buttonText,
          primary ? styles.primaryButtonText : styles.secondaryButtonText,
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: '#5CB85C',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#5CB85C',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  secondaryButtonText: {
    color: '#5CB85C',
  },
});

export default Button;
