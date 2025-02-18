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

async function removeLink(id: string): Promise<void> {
    try {
        const links = await getLinks();
        const newLinks = links.filter(link => link.id !== id);
        await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(newLinks));
    } catch (error) {
        throw new Error("Error removing link");
    }
}

async function updateLink(updatedLink: LinkStorage): Promise<void> {
    try {
        const links = await getLinks();
        const newLinks = links.map(link => {
            if (link.id === updatedLink.id) {
                return updatedLink;
            }
            return link;
        });
        await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(newLinks));
    } catch (error) {
        throw new Error("Error updating link");
    }
}

export const linkStorage = { getLinks, addLink, removeLink };