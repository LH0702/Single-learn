import { expect } from 'chai'
import { buildMatchPattern, kmp } from '../../stringalgorithms/kmp';

describe('kmp 算法测试', () => {

    describe('build match pattern test',()=>{
        it('输入参数为null ', () => {
            let words = null;
            expect(() => buildMatchPattern(this.words)).to.throw(Error);
        });

        it('输入参数为空字符串 ', () => {
            let words = "";
            let pattern = buildMatchPattern(words);
            expect(pattern).to.be.deep.equal([0]);
        });

        it('输入参数为单个字符 ', () => {
            let words = "a";
            let pattern = buildMatchPattern(words);
            expect(pattern).to.be.deep.equal([0]);
        });

        it('输入参数为单个连续字符 ', () => {
            let words = "aaaaa";
            let pattern = buildMatchPattern(words);
            expect(pattern).to.be.deep.equal([0,1,2,3,4]);
        });

        it('输入参数为多个连续字符 ', () => {
            let words = "ababababab";
            let pattern = buildMatchPattern(words);
            expect(pattern).to.be.deep.equal([0,0,1,2,3,4,5,6,7,8]);
        });

        it('输入参数为没有重复字符 ', () => {
            let words = "abcdefghijklmn";
            let pattern = buildMatchPattern(words);
            expect(pattern).to.be.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
        });

        it('输入参数为非连续重复字符_01', () => {
            let words = "abcdefgxcdabcdefg";
            let pattern = buildMatchPattern(words);
            expect(pattern).to.be.deep.equal([0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7]);
        });

        it('输入参数为非连续重复字符_02', () => {
            let words = "ababsdcababa";
                         
            let pattern = buildMatchPattern(words);
            expect(pattern).to.be.deep.equal([0,0,1,2,0,0,0,1,2,3,4,3]);
        });

    })

    describe('kmp test',()=>{
        it('输入参数为null ', () => {
            let words:string = null;
            let target:string = null;
            expect(() => kmp(target,this.words)).to.throw(Error);

            expect(() => kmp("",this.words)).to.throw(Error);

            expect(() => kmp(target,"")).to.throw(Error);
        });

        it('输入参数为空字符串 ', () => {
            expect(() => kmp("","")).to.throw(Error);
        });

        it('匹配字符串为单个字符,目标字符串存在多个匹配字符串 ', () => {
            let words = "a";
            let target = "abcdefgads"
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([0,7]);
        });

        it('匹配字符串为单个字符,全部匹配 ', () => {
            let words = "a";
            let target = "aaaaaaa"
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([0,1,2,3,4,5,6]);
        });

        it('匹配字符串为单个字符,目标字符串存在一个匹配字符串', () => {
            let words = "a";
            let target = "xbcdefgads";
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([7]);
        });

        it('匹配字符串为单个字符,目标字符串不存在匹配字符串', () => {
            let words = "a";
            let target = "xbcdefgxds";
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([]);
        });

        it('匹配字符串为单个字符,目标字符串不存在匹配字符串', () => {
            let words = "a";
            let target = "xbcdefgxds";
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([]);
        });

        it('匹配字符串长度大于目标字符串', () => {
            let words = "assdsds";
            let target = "xbcd";
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([]);
        });

        it('匹配字符串长度等于目标字符串', () => {
            let words = "assdsds";
            let target = "assdsds";
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([0]);
        });

        it('匹配字符串为多个连续字符，不存在匹配', () => {
            let words = "abab";
            let target = "abcdefgads"
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([]);
        });

        it('匹配字符串为多个连续字符，存在单次匹配', () => {
            let words = "abcd";
            let target = "xabcdefgads"
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([1]);

            expect(kmp("abcdefg","abcd")).to.be.deep.equal([0]);
            expect(kmp("efgabcd","abcd")).to.be.deep.equal([3]);
        });

        it('匹配字符串为多个连续不相同字符，存在多次匹配', () => {
            let words = "abcd";
            let target = "abcdefgabcdadsabcd"
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([0,7,14]);
        });

        it('匹配字符串存在前缀的情况_001', () => {
            let words = "aaaa";
            let target = "aaaaaaaa"             
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([0,1,2,3,4]);
        });

        it('匹配字符串存在前缀的情况_002', () => {
            let words = "abab";
            let target = "abababababab"      
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([0,2,4,6,8]);
        });

        it('匹配字符串存在前缀的情况_003', () => {
            let words = "ababc";
            let target = "ababcsdxsababc" ;      
            let pattern = kmp(target,words);
            expect(pattern).to.be.deep.equal([0,9]);
        });

    })
       


})