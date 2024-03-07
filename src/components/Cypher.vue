<template>
  <div class="caesar">
    <div class="row">
      <div class="col-sm">
        <div class="form-group">
          <label for="exampleInputEmail1">Input</label>
          <input type="text" class="cypher-input form-control" v-model="input" />
        </div>
        <div class="form-group">
          <label for="formControlRange">Offset by {{ offset }}</label>
          <input type="range" class="form-control-range" max="25" v-model="offset" />
        </div>
        <button type="button" class="btn btn-primary cypher-encrypt" @click="encrypt">
          Encrypt
        </button>
        <button type="button" class="btn btn-secondary cypher-decrypt" @click="decrypt">
          Decrypt
        </button>
      </div>
      <div class="col-sm">
        <div class="alert alert-primary" role="alert">
          <p>Output</p>
          <p class="cypher-output">{{ output }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DEFAULT_OFFSET } from '../config/settings';
import { encrypt, decrypt } from '../helpers/caesar';

export default {
  name: 'Cypher',
  data() {
    return {
      input: '',
      output: '',
      offset: DEFAULT_OFFSET,
    };
  },
  methods: {
    encrypt() {
      this.output = encrypt(this.input, this.offset);
    },
    decrypt() {
      this.output = decrypt(this.input, this.offset);
    },
  },
};
</script>

<style scoped></style>
