<template>
  <div class="app">
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">

          <!--Top Banner-->
          <div style=" background-color: rgb(73, 38, 101); color: white; border-top-right-radius: 5px; border-top-left-radius: 5px; padding: 20px; font-size: 20px;">
            <div class="col-sm-12">
              Sign up for a Weber Classifieds Account
            </div>
          </div>

          <!--Main Content-->
          <div style="border-color: rgb(73, 38, 101); border-style: solid; border-width: 5px; background-color: white;  padding: 20px;">

            <div class="form-group">
              <label class="control-label col-sm-12" for="wnumber">W# <span class="text-danger">*</span></label>
              <div class="col-sm-12">
                <input class="form-control" name="wnumber" type="text" id="wnumber"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-12" for="firstname">First Name <span class="text-danger">*</span></label>
              <div class="col-sm-12">
                <input class="form-control" name="firstname" type="text" id="firstname"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-12" for="lastname">Last Name <span class="text-danger">*</span></label>
              <div class="col-sm-12">
                <input class="form-control" name="lastname" type="text" id="lastname"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-12" for="email">Email Address <span class="text-danger">*</span></label>
              <div class="col-sm-12">
                <input class="form-control" name="email" type="text" id="email"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-12" for="addressline1">Address Line 1 <span class="text-danger">*</span></label>
              <div class="col-sm-12">
                <input class="form-control" name="addressline1" type="text" id="addressline1"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-12" for="addressline2">Address Line 2</label>
              <div class="col-sm-12">
                <input class="form-control" name="addressline2" type="text" id="addressline2"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-12" for="citystate">City/State <span class="text-danger">*</span></label>
              <div class="col-sm-12">
                <input class="form-control" name="citystate" type="text" id="citystate"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-12" for="zip">Zip <span class="text-danger">*</span></label>
              <div class="col-sm-12">
                <input class="form-control" name="zip" type="text" id="zip"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-12" for="password">Password <span class="text-danger">*</span></label>
              <div class="col-sm-12">
                <input class="form-control" name="password" type="text" id="password"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-12" for="confirmpassword">Confirm Password <span class="text-danger">*</span></label>
              <div class="col-sm-12">
                <input class="form-control" name="confirmpassword" type="text" id="confirmpassword"/>
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <div class="col-sm-12">
                  <button class="btn-primary">Sign up</button>
                </div>
              </div>
            </div>

          </div>

          <!--Bottom Content-->
          <div style=" background-color: rgb(73, 38, 101); color: white; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding: 20px; font-size: 20px;">
            <div class="col-sm-12">
              Already have an account? Log in <a href="" style="color: white; text-decoration: underline;">here</a>
            </div>
          </div>

          <!--Extra Spacing for bottom of page-->
          <br>
          <br>
          <br>

        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'full',
    components: {
    },
    computed: {
    }
  }
</script>
