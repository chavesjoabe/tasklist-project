import expresss from 'express';
import fs from 'fs';
class Routes {
    constructor() {
        this.loadRoutes();
    }
    public routes = expresss.Router();
    private url = './src/modules';

    private getRoutes(): string[] {
        const files = fs.readdirSync(this.url, { encoding: 'utf-8' });

        return files;
    }
    private loadRoutes() {
        this.getRoutes().forEach((route) => {
            this.routes.use(
                `/${route}`,
                require(`../modules/${route}`).default
            );
        });
    }
}
export default new Routes().routes;
