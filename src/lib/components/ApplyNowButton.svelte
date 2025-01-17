<script lang="ts">
  export let link: string;
</script>

<style>
  .apply-now-button {
    background: url('/src/lib/media/Apply_Now_Button.svg') no-repeat center center;
    background-size: cover;
    font-family: 'Etna', 'Times';
    font-size: 15px;
    font-weight: 800;
    color: #4162BF;
    padding: 20px 20px;
    border: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: transform 0.3s ease-in-out;
    width: 200px;
    height: 70px;
  }
  .apply-now-button:hover {
    transform: scale(1.05);
  }
  @media (max-aspect-ratio: 8/5) {
    .apply-now-button {
      width: 150px;
      height: 52px;
      font-size: 12px;
      padding-top: 10px;
    }
  }
</style>

<a href={link} target="_blank" class="apply-now-button">
  <span>APPLY HERE!</span>
</a>
