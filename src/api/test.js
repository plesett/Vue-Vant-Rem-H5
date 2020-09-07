import service from '../utils/request'

export async function Test() {
    return await service('/index', {
        params: {
            id: 8888
        }
    })
}