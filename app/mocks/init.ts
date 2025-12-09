initMocks();

export async function initMocks() {
  if (typeof window === 'undefined') return;

  const { worker } = await import('@/mocks/browser');

  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}
