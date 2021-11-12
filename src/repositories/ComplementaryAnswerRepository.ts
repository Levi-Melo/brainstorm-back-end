import { EntityRepository, Repository } from "typeorm";
import { ComplementaryAnswer } from "../entities/ComplementaryAnswer";

@EntityRepository(ComplementaryAnswer)
export class ComplementaryAnswerRepository extends Repository<ComplementaryAnswer> {}
