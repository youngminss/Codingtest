function solution(skill, skill_trees) {
  const isValidSkillTree = (skillTree) => {
    let currentIdx = 0;

    for (let i = 0; i < skillTree.length; i++) {
      if (skill.includes(skillTree[i])) {
        if (skill[currentIdx] !== skillTree[i]) return false;
        currentIdx = currentIdx + 1;
      }
    }

    return true;
  };

  return skill_trees.filter((skillTree) => isValidSkillTree(skillTree)).length;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
