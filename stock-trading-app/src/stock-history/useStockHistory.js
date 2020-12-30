import { useState, useEffect } from 'react';

const zip = (keys, values) =>
    keys.reduce((acc, key, i) => ({
        ...acc,
        [key]: values[i],
    }), {})
