import { luhnCheck, paymentSystem } from "../app";

test.each([
  [{Card: 4716362962767100}, 'true'],
  [{Card: 5304387593128294}, 'true'],
  [{Card: 343814508989803}, 'true'],
  [{Card: 3533348904680033}, 'true'],
  [{Card: 6011810497325395}, 'true'],
  [{Card: 30388459663236}, 'true'],
])(
('checking the card %s for authenticity'),
(health, expected) => {
  const result = luhnCheck(Card);
  expect(result).toBe(expected);
});

test("should add do something", async () => {
  await page.goto(baseUrl);
});

test.each([
  [{Card: 4716362962767100}, 'Visa'],
  [{Card: 5304387593128294}, 'Mastercard'],
  [{Card: 375840331700845}, 'American Express'],
  [{Card: 30388459663236}, 'Diners Club'],
  [{Card: 6011810497325395}, 'Discover'],
  [{Card: 3533348904680033}, 'JCB'],
  [{Card: 2533348904680033}, 'Mir Pay'],
])(
('checking the card %s for payment system %s'),
(health, expected) => {
  const result = paymentSystem(Card);
  expect(result).toBe(expected);
});