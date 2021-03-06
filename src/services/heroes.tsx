import api from '../config'
import * as Crypto from 'expo-crypto';

// @ts-ignore
import { PRIVATE_KEY, PUBLIC_KEY } from "@env"

async function createHash(timeStamp: any) {
    const prevHash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
    const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.MD5,
        prevHash
    );
    
    return digest;
}

export async function getHeroes({query='', offset}: any) {
    const timeStamp = Date.now().toString();
    const hash = await createHash(timeStamp)
    
    let url = `characters?apikey=${PUBLIC_KEY}&ts=${timeStamp}&hash=${hash}&limit=${30}&offset=${offset}&orderBy=name`

    if (query !== '') {
        url += `&nameStartsWith=${query}`
    }

    const response = await api.get(url)

    return response
}

export async function getHeroSeries({collectionURI, query, offset}: any) {
    const timeStamp = Date.now().toString();
    const hash = await createHash(timeStamp)

    let url = collectionURI.split('/public/')[1];
    
    url += `?apikey=${PUBLIC_KEY}&ts=${timeStamp}&hash=${hash}&limit=${30}&offset=${offset}&orderBy=title`
    
    if (query !== '') {
        url += `&titleStartsWith=${query}`
    }

    const response = await api.get(url)

    return response
}

export async function getHeroEvents({collectionURI, query, offset}: any) {
    const timeStamp = Date.now().toString();
    const hash = await createHash(timeStamp)

    let url = collectionURI.split('/public/')[1];
    
    url += `?apikey=${PUBLIC_KEY}&ts=${timeStamp}&hash=${hash}&limit=${30}&offset=${offset}&orderBy=name`
    
    if (query !== '') {
        url += `&nameStartsWith=${query}`
    }

    const response = await api.get(url)

    return response
}
