import { Container } from "./styles";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container 
      type='button' 
      disabled={loading || rest.disabled}
      $isLoading={loading}
      {...rest}
    >
      {loading ? (
        <DotLottieReact
          src="https://lottie.host/d2022773-cc62-4765-870a-ba142aa7c0e7/J1O65tK0k6.lottie"
          loop
          autoplay
          style={{ width: 64, height: 64 }}
        />
      ) : (
        title
      )}
    </Container>
  );
}
