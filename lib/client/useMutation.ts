import { useState } from "react";

interface UseMutationStateType {
  loading: boolean;
  data?: any;
  error?: object;
}

type useMutationFnType = [(data: any) => void, UseMutationStateType];

export default function useMutation(url: string): useMutationFnType {
  const [state, setState] = useState<UseMutationStateType>({
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
      .then((data) => setState((prev) => ({ ...prev, data, loading: false })));
  }
  console.log(state);
  return [mutationFn, { ...state }];
}
