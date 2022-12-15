import { Service, Inject } from 'typedi';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import { IAssetInputDTO } from '@/interfaces/IAsset';
import axios from 'axios';

@Service()
export default class AssetService {
  constructor(
    @Inject('assetModel') private assetModel: Models.AssetModel,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async GetAssets(filter) {
    return this.assetModel.findAll({
      where: filter,
      raw: true,
      nest: true,
    });
  }

  public async GetAsset(id) {
    return this.assetModel.findByPk(id);
  }

  public async CreateAsset(assetInputDTO: IAssetInputDTO) {
    return this.assetModel.create(assetInputDTO);
  }

  public async UpdateAsset(id, assetInputDTO: IAssetInputDTO) {
    return this.assetModel.update(assetInputDTO, {
      where: {
        id: id,
      },
    });
  }

  public async DeleteAsset(id) {
    return this.assetModel.destroy({
      where: {
        id: id,
      },
    });
  }

  public async SyncAssetPrice(filter) {
    const assets = await this.GetAssets(filter);
    for (const asset of assets) {
      const product = await axios.get(`https://dummyjson.com/products/search?q=${asset.name}`);
      if (product?.data?.products[0]) {
        await this.UpdateAsset(asset.id, {
          price: product.data.products[0].price,
        });
      }
    }
  }
}
