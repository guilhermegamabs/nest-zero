export abstract class RocketMembemRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
