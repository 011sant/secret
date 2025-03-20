import { onCLS, onFID, onLCP } from 'web-vitals';

export const reportWebVitals = ({ id, name, value }: any) => {
  if (process.env.NODE_ENV === 'production') {
    const body = JSON.stringify({ id, name, value });
    const url = '/api/analytics';

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: 'POST', keepalive: true });
    }
  }
};

export const measureWebVitals = () => {
  onCLS(reportWebVitals);
  onFID(reportWebVitals);
  onLCP(reportWebVitals);
};
