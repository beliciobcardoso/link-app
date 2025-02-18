import AsyncStorage from "@react-native-async-storage/async-storage";

const LINK_STORAGE_KEY = "LINK_STORAGE_KEY";

export type LinkStorage = {
    id: string;
    name: string;
    url: string;
    category: string;
}

async function getLinks(): Promise<LinkStorage[]> {
    const links = await AsyncStorage.getItem(LINK_STORAGE_KEY);
    if (links) {
        return JSON.parse(links);
    }
    return [];
}

async function addLink(newLink: LinkStorage): Promise<void> {
    try {
        const links = await getLinks();
        links.push(newLink);
        await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(links));
    } catch (error) {
        throw new Error("Error adding link");
    }
}

export const linkStorage = { getLinks, addLink };