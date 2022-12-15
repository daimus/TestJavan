import { Service, Inject } from 'typedi';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import { IFamilyInputDTO } from '@/interfaces/IFamily';

@Service()
export default class FamilyService {
  constructor(
    @Inject('familyModel') private familyModel: Models.FamilyModel,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async GetFamilies(filter) {
    return this.familyModel.findAll({
      where: filter,
      raw: true,
      nest: true,
    });
  }

  public async GetFamily(id) {
    return this.familyModel.findByPk(id);
  }

  public async CreateFamily(familyInputDTO: IFamilyInputDTO) {
    return this.familyModel.create(familyInputDTO);
  }

  public async UpdateFamily(id, familyInputDTO: IFamilyInputDTO) {
    return this.familyModel.update(familyInputDTO, {
      where: {
        id: id,
      },
    });
  }

  public async DeleteFamily(id) {
    return this.familyModel.destroy({
      where: {
        id: id,
      },
    });
  }
}
