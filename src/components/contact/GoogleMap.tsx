const GoogleMap = () => {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#15181E] p-4 h-full">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.864446161832!2d31.773836525709495!3d30.12669211467145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581b07a26fb523%3A0x51286f1613933be1!2zS2FuYWFuIFRleCDZg9mG2LnYp9mGINiq2YPYsw!5e0!3m2!1sar!2seg!4v1783013509521!5m2!1sar!2seg"
        width="100%"
        height="100%"
        className="min-h-[650px] rounded-2xl"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div>
  );
};

export default GoogleMap;
