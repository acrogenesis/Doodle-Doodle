function checkSemantic(index1, index2, op) {
  switch (index1) {
    case 29:
      index1 = 0;
      break;
    case 30:
      index1 = 1;
      break;
    case 31:
      index1 = 2;
      break;
    case 32:
      index1 = 3;
      break;
    default:
      return -1;
  }

  switch (index2) {
    case 29:
      index2 = 0;
      break;
    case 30:
      index2 = 1;
      break;
    case 31:
      index2 = 2;
      break;
    case 32:
      index2 = 3;
      break;
    default:
      return -1;
  }

  if (index1 > index2) {
    var temp = index1;
    index1 = index2;
    index2 = temp;
  }

  return semantic_cube[index1][index2][op];
}

var semantic_cube = [];
semantic_cube[0] = [];
semantic_cube[1] = [];
semantic_cube[2] = [];
semantic_cube[3] = [];

semantic_cube[0][0] = [];
semantic_cube[0][1] = [];
semantic_cube[0][2] = [];
semantic_cube[0][3] = [];

semantic_cube[1][0] = [];
semantic_cube[1][1] = [];
semantic_cube[1][2] = [];
semantic_cube[1][3] = [];

semantic_cube[2][0] = [];
semantic_cube[2][1] = [];
semantic_cube[2][2] = [];
semantic_cube[2][3] = [];

semantic_cube[3][0] = [];
semantic_cube[3][1] = [];
semantic_cube[3][2] = [];
semantic_cube[3][3] = [];

semantic_cube[0][0][0] = 29;
semantic_cube[0][0][1] = 29;
semantic_cube[0][0][2] = 29;
semantic_cube[0][0][3] = 29;
semantic_cube[0][0][4] = 32;
semantic_cube[0][0][5] = 32;
semantic_cube[0][0][6] = 32;
semantic_cube[0][0][7] = 32;
semantic_cube[0][0][8] = 32;
semantic_cube[0][0][9] = 32;
semantic_cube[0][0][10] = -1;
semantic_cube[0][0][11] = -1;

semantic_cube[0][1][0] = 30;
semantic_cube[0][1][1] = 30;
semantic_cube[0][1][2] = 30;
semantic_cube[0][1][3] = 30;
semantic_cube[0][1][4] = 32;
semantic_cube[0][1][5] = 32;
semantic_cube[0][1][6] = 32;
semantic_cube[0][1][7] = 32;
semantic_cube[0][1][8] = 32;
semantic_cube[0][1][9] = 32;
semantic_cube[0][1][10] = -1;
semantic_cube[0][1][11] = -1;

semantic_cube[0][2][0] = -1;
semantic_cube[0][2][1] = -1;
semantic_cube[0][2][2] = -1;
semantic_cube[0][2][3] = -1;
semantic_cube[0][2][4] = 32;
semantic_cube[0][2][5] = -1;
semantic_cube[0][2][6] = -1;
semantic_cube[0][2][7] = -1;
semantic_cube[0][2][8] = -1;
semantic_cube[0][2][9] = 32;
semantic_cube[0][2][10] = -1;
semantic_cube[0][2][11] = -1;

semantic_cube[0][3][0] = -1;
semantic_cube[0][3][1] = -1;
semantic_cube[0][3][2] = -1;
semantic_cube[0][3][3] = -1;
semantic_cube[0][3][4] = 32;
semantic_cube[0][3][5] = -1;
semantic_cube[0][3][6] = -1;
semantic_cube[0][3][7] = -1;
semantic_cube[0][3][8] = -1;
semantic_cube[0][3][9] = 32;
semantic_cube[0][3][10] = -1;
semantic_cube[0][3][11] = -1;

semantic_cube[1][1][0] = 30;
semantic_cube[1][1][1] = 30;
semantic_cube[1][1][2] = 30;
semantic_cube[1][1][3] = 30;
semantic_cube[1][1][4] = 32;
semantic_cube[1][1][5] = 32;
semantic_cube[1][1][6] = 32;
semantic_cube[1][1][7] = 32;
semantic_cube[1][1][8] = 32;
semantic_cube[1][1][9] = 32;
semantic_cube[1][1][10] = -1;
semantic_cube[1][1][11] = -1;

semantic_cube[1][2][0] = -1;
semantic_cube[1][2][1] = -1;
semantic_cube[1][2][2] = -1;
semantic_cube[1][2][3] = -1;
semantic_cube[1][2][4] = 32;
semantic_cube[1][2][5] = -1;
semantic_cube[1][2][6] = -1;
semantic_cube[1][2][7] = -1;
semantic_cube[1][2][8] = -1;
semantic_cube[1][2][9] = 32;
semantic_cube[1][2][10] = -1;
semantic_cube[1][2][11] = -1;

semantic_cube[1][3][0] = -1;
semantic_cube[1][3][1] = -1;
semantic_cube[1][3][2] = -1;
semantic_cube[1][3][3] = -1;
semantic_cube[1][3][4] = 32;
semantic_cube[1][3][5] = -1;
semantic_cube[1][3][6] = -1;
semantic_cube[1][3][7] = -1;
semantic_cube[1][3][8] = -1;
semantic_cube[1][3][9] = 32;
semantic_cube[1][3][10] = -1;
semantic_cube[1][3][11] = -1;

semantic_cube[2][2][0] = 31;
semantic_cube[2][2][1] = -1;
semantic_cube[2][2][2] = -1;
semantic_cube[2][2][3] = -1;
semantic_cube[2][2][4] = 32;
semantic_cube[2][2][5] = -1;
semantic_cube[2][2][6] = -1;
semantic_cube[2][2][7] = -1;
semantic_cube[2][2][8] = -1;
semantic_cube[2][2][9] = 32;
semantic_cube[2][2][10] = -1;
semantic_cube[2][2][11] = -1;

semantic_cube[2][3][0] = -1;
semantic_cube[2][3][1] = -1;
semantic_cube[2][3][2] = -1;
semantic_cube[2][3][3] = -1;
semantic_cube[2][3][4] = 32;
semantic_cube[2][3][5] = -1;
semantic_cube[2][3][6] = -1;
semantic_cube[2][3][7] = -1;
semantic_cube[2][3][8] = -1;
semantic_cube[2][3][9] = 32;
semantic_cube[2][3][10] = -1;
semantic_cube[2][3][11] = -1;

semantic_cube[3][3][0] = -1;
semantic_cube[3][3][1] = -1;
semantic_cube[3][3][2] = -1;
semantic_cube[3][3][3] = -1;
semantic_cube[3][3][4] = 32;
semantic_cube[3][3][5] = -1;
semantic_cube[3][3][6] = -1;
semantic_cube[3][3][7] = -1;
semantic_cube[3][3][8] = -1;
semantic_cube[3][3][9] = 32;
semantic_cube[3][3][10] = 32;
semantic_cube[3][3][11] = 32;
