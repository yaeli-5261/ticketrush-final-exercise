# Refund branch review

**Recommendation: do not merge yet.**

- `js/refund.js`: `calcRefund` applies the 90% refund rate to both the ticket price and service fee. The comment says the service fee is not refundable, and `tests/refund.test.js` expects 315 for one ticket and 630 for two. The implementation returns 325.8 and 651.6 instead. Calculate the refund from the ticket price only.
- Validation: `node tests/run.js` reports 3 passed and 4 failed. Both refund tests fail for the calculation above. The two `format.test.js` failures are unrelated to this branch's refund change; the existing formatter returns `₪0.00` for the tested prices.
