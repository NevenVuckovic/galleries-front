import galleriesService from '../../services/GalleryService';
export const actions = {
    async getGalleries(store) {
        const galleries = await galleriesService.getGalleries(store.state.searchTerm);
        store.commit('setGalleries', galleries);
    },
    async deleteGallery(store, gallery) {
        await moviesService.deleteGallery(gallery.id);
        store.commit('deleteGallery', gallery);
    },
};