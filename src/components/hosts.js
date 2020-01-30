const host = 'http://134.209.138.34';

export default {
    apartmentListPath: () => [host, 'items'].join('/'),
    apartmentItemPath: (id) => [host, 'item', id].join('/')
};
