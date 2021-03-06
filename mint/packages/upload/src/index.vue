<!-- https://didi.github.io/cube-ui/#/zh-CN/docs/upload -->

<template>
  <div class="cube-upload" :class="{'cube-upload-single': !multiple, 'cube-upload-success':files.length}">
    <slot>
      <div class="cube-upload-def clear-fix">
        <upload-file v-for="(file, i) in files" :file="file" :key="i" @click="fileClick"></upload-file>
        <div class="reupload-tip">点击重新上传</div>
        <upload-btn :multiple="multiple"></upload-btn>
      </div>
    </slot>
  </div>
</template>
<script>
  import UploadBtn from './btn.vue'
  import UploadFile from './file.vue'
  import ajaxUpload from './ajax'
  import {
    processFiles,
    newFile,
    URL,
    STATUS_READY,
    STATUS_UPLOADING,
    STATUS_ERROR,
    STATUS_SUCCESS
  } from './util'

  const COMPONENT_NAME = 'mt-upload'
  const EVENT_ADDED = 'files-added'
  const EVENT_SUBMITTED = 'file-submitted'
  const EVENT_REMOVED = 'file-removed'
  const EVENT_SUCCESS = 'file-success'
  const EVENT_ERROR = 'file-error'
  const EVENT_CLICK = 'file-click'

  export default {
    name: COMPONENT_NAME,
    props: {
      action: {
        type: [String, Object],
        default: ''
      },
      max: {
        type: Number,
        default: 10
      },
      auto: {
        type: Boolean,
        default: true
      },
      simultaneousUploads: {
        type: Number,
        default: 1
      },
      processFile: {
        type: Function,
        default: function (file, cb) {
          cb(file)
        }
      },
      multiple:{
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        files: [],
        paused: !this.auto
      }
    },
    computed: {
      actionOptions() {
        const action = this.action
        if (typeof action === 'string') {
          return action ? {
            target: action
          } : null
        } else {
          return action
        }
      },
      isShowBtn() {
        return this.files.length < this.max
      }
    },
    methods: {
      addFiles(files) {
        this.$emit(EVENT_ADDED, files)
        const filesLen = this.files.length
        const newFiles = []
        const maxLen = this.max - filesLen
        let i = 0
        let file = files[i]
        while (newFiles.length < maxLen && file) {
          if (!file.ignore) {
            newFiles.push(file)
            this.files.push(newFile())
          }
          file = files[++i]
        }
        processFiles(newFiles, this.processFile, (file, index) => {
          this.$set(this.files, filesLen + index, file)
          this.$emit(EVENT_SUBMITTED, file)
        }, () => {
          // waiting ui
          this.$nextTick(() => {
            this.upload()
          })
        })
      },
      removeFile(file) {
        this.$emit(EVENT_REMOVED, file)
        file._xhr && file._xhr.abort()
        if (file.url) {
          URL.revokeObjectURL(file.url)
        }
        const index = this.files.indexOf(file)
        this.files.splice(index, 1)
        this.upload()
      },
      fileClick(file) {
        this.$emit(EVENT_CLICK, file)
      },
      upload(retry) {
        const options = this.actionOptions
        if (this.paused || !options) {
          return
        }
        const len = this.files.length
        let uploadingCount = 0
        let i = 0
        while (i < len && uploadingCount < this.simultaneousUploads) {
          const file = this.files[i]
          const status = file.status
          if (status === STATUS_READY || (retry && status === STATUS_ERROR && file._retryId !== this.retryId)) {
            ajaxUpload(file, options, (file) => {
              if (status === STATUS_ERROR) {
                file._retryId = this.retryId
              }
              this.$emit(file.status === STATUS_SUCCESS ? EVENT_SUCCESS : EVENT_ERROR, file)
              this.upload(retry)
            })
            uploadingCount++
          } else if (status === STATUS_UPLOADING) {
            uploadingCount++
          }
          i++
        }
      },
      start() {
        this.paused = false
        this.upload()
      },
      pause() {
        this.paused = true
        this.files.forEach((file) => {
          if (file.status === STATUS_UPLOADING) {
            file._xhr.abort()
            file.status = STATUS_READY
          }
        })
      },
      retry() {
        this.retryId = Date.now()
        this.paused = false
        this.upload(true)
      }
    },
    components: {
      UploadBtn,
      UploadFile
    }
  }
</script>
<style>
.cube-upload { position: relative }
.cube-upload-def { margin-right: -10px }
.cube-upload-def .cube-upload-btn,
.cube-upload-def .cube-upload-file { float: left; margin: 0 10px 10px 0 } 

.cube-upload-single .cube-upload-file,
.cube-upload-single .cube-upload-btn{margin: 0;} 
.cube-upload-single .cube-upload-file,
.cube-upload-single .cube-upload-btn{position: absolute;left: 0;top: 0;}
.cube-upload-single .cube-upload-btn .cube-upload-btn-def{background: none;}
.cube-upload-single .cube-upload-def{margin: 0;position: relative;width: 80px;height: 80px;}

.cube-upload-success .cube-upload-btn-def>i:after, .cube-upload-success .cube-upload-btn-def>i:before{background: #fff;}
.reupload-tip{display: none;}
.cube-upload-success .reupload-tip{position: absolute;width: 100%;bottom: 0;left: 0;color: #fff;text-align: center;font-size: 12px;height: 20px;line-height: 20px;background: rgba(0, 0, 0, .5);display: block;}
</style>
