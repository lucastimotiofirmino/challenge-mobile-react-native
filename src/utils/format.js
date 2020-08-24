import 'intl';
import 'intl/locale-data/jsonp/en';

export const {format: FORMAT_PRICE} = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
});
