import { Inject, Service } from 'typedi';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import { IAssetInputDTO } from '@/interfaces/IAsset';
import axios from 'axios';
import events from '@/subscribers/events';
import _ from 'lodash';

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
    assetInputDTO.price = await this.GetAssetPrice(assetInputDTO.name);
    return this.assetModel.create(assetInputDTO);
  }

  public async UpdateAsset(id, assetInputDTO: IAssetInputDTO) {
    assetInputDTO.price = await this.GetAssetPrice(assetInputDTO.name);
    const result = await this.assetModel.update(assetInputDTO, {
      where: {
        id: id,
      },
    });
    return _.every(result, Boolean);
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
      const price = await this.GetAssetPrice(asset.name);
      await this.assetModel.update(
        {
          price: price,
        },
        {
          where: filter,
        },
      );
    }
  }

  public async GetAssetPrice(name) {
    const product = await axios.get(`https://dummyjson.com/products/search?q=${name}`);
    return product?.data?.products[0]?.price || 0;
  }
}
