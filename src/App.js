import "./App.css";

import { useSelector } from "react-redux";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";

const App = () => {
  // const queryClient = useQueryClient();

  const queryClient = new QueryClient();
  // Store에 있는 todos 모듈 state 조회하기
  const todos = useSelector((state) => state.todos);

  // Store에 있는 counter 모듈 state 조회하기
  // const counter = useSelector((state) => state.counter);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />;
    </QueryClientProvider>
  );
};

export default App;
