import BaseService from './BaseService';

class GalleryService extends BaseService {
    async getGalleries(title) {
        const {
            data
        } = await this.http.get('/galleries', {
            params: {
                title
            }
        });
        return data;
    }

    async getGallery(id) {
        const {
            data
        } = await this.http.get(`/galleries/${id}`);
        return data;
    }

    async createGallery(gallery) {
        const {
            data
        } = await this.http.post('galleries', movie);
        return data;
    }

    async updateGallery(id, gallery) {
        const {
            data
        } = await this.http.put(`/movies/${id}`, movie);
        return data;
    }

    async deleteGallery(id) {
        const {
            data
        } = await this.http.delete(`/galleries/${id}`);
        return data;
    }
}

const galleriesService = new GalleryService();
export default galleriesService;