import {Column} from "../../../../../../../src/decorator/columns/Column";
import {Embedded} from "../../../../../../../src/decorator/Embedded";
import {PrimaryColumn} from "../../../../../../../src/decorator/columns/PrimaryColumn";
import {OneToOne} from "../../../../../../../src/decorator/relations/OneToOne";
import {JoinColumn} from "../../../../../../../src/decorator/relations/JoinColumn";
import {Category} from "./Category";
import {Subcounters} from "./Subcounters";

export class Counters {

    @PrimaryColumn()
    code: number;

    @Column()
    likes: number;

    @Column()
    comments: number;

    @Column()
    favorites: number;

    @OneToOne(type => Category)
    @JoinColumn()
    category: Category;

    @Embedded(() => Subcounters)
    subcounters: Subcounters;

    categoryId: number[];

}