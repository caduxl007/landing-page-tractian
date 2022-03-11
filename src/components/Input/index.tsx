import { useField } from '@unform/core';
import {
  InputHTMLAttributes,
  ReactElement, useEffect,
  useRef,
  useState
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function Input({ name, label, ...rest }: InputProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null); // HTMLInputElement - vai dar ao inputRef as propriedades de um input

  const [isFocused, setIsFocused] = useState(false); // Se esta com foco
  const [isFilled, setIsFilled] = useState(false); // Se esta preenchido

  const { fieldName, defaultValue, error, registerField } = useField(name);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.InputBlock>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Container
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <input
          onFocus={handleInputFocus} // Receber o foco
          onBlur={handleInputBlur} // Perder o foco
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {error && (
          <S.Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </S.Error>
        )}
      </S.Container>
    </S.InputBlock>
  );
}
