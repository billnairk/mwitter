import { useState } from "react";

interface UseMutationStateType<T> {
  loading: boolean;
  data?: T;
  error?: object;
}

type useMutationFnType<T> = [(data: any) => void, UseMutationStateType<T>];

export default function useMutation<T = any>(
  url: string
): useMutationFnType<T> {
  const [state, setState] = useState<UseMutationStateType<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutationFn(data: any) {
    setState((prev) => ({ ...prev, loading: true }));
    console.log(state);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => {
        setState((prev) => ({ ...prev, data, loading: false }));
      })
      .catch((error) =>
        setState((prev) => ({ ...prev, error, loading: false }))
      );
  }

  return [mutationFn, { ...state }];
}
